import {createAction} from "@ngrx/store";

export const current = createAction(
    '[Results Component] CurrentResults'
);
export const previous = createAction(
    '[Results Component] LastResults'
);
export const clear = createAction(
    '[Results Component] ClearResults'
)