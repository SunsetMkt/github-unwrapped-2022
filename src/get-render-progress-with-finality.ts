import {getRenderProgress} from '@remotion/lambda/client';
import {Render, updateRenderWithFinality} from './db/renders';
import {sendDiscordMessage} from './discord-monitoring';
import {getFinality} from './get-render-or-make';
import {setEnvForKey} from './set-env-for-key';
import {RenderProgressOrFinality} from './types';

export const getRenderProgressWithFinality = async ({
	render,
	assume0Progress,
}: {
	render: Render;
	assume0Progress: boolean;
}): Promise<RenderProgressOrFinality> => {
	setEnvForKey(render.account);

	if (render.finality) {
		return {
			type: 'finality',
			finality: render.finality,
		};
	}

	if (!render.renderId || !render.bucketName) {
		return {
			progress: {
				percent: 0,
			},
			type: 'progress',
		};
	}

	const progress = assume0Progress
		? null
		: await getRenderProgress({
				renderId: render.renderId,
				bucketName: render.bucketName,
				functionName: render.functionName,
				region: render.region,
		  });

	const finality = progress === null ? null : getFinality(progress);

	if (finality) {
		await updateRenderWithFinality({
			renderId: render.renderId,
			username: render.username,
			region: render.region,
			finality,
			theme: render.theme,
			account: render.account,
		});
		sendDiscordMessage(
			`Updated ${render.renderId} with finality: ${JSON.stringify(finality)}}`
		);
		return {
			type: 'finality',
			finality,
		};
	}

	return {
		type: 'progress',
		progress: {
			percent: progress === null ? 0 : progress.overallProgress,
		},
	};
};
