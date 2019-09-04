import {createAction} from "@ngrx/store";

export const current = createAction(
    '[Results Component] Current Results'
);
export const previous = createAction(
    '[Results Component] Previous Results'
);
export const clear = createAction(
    '[Results Component] Clear Results'
)