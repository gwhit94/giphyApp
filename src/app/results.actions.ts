import {createAction, props} from "@ngrx/store";

export const current = createAction(
    '[Results Component] Current Results', props<{query: string, searchNum: number, queries?: Array<string>}>()
);
export const previous = createAction(
    '[Results Component] Previous Results'
);
export const clear = createAction(
    '[Results Component] Clear Results'
)