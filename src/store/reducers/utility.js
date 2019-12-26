export const objectCreator = (oldState, newValues) => {
    return {
        ...oldState,
        ...newValues
    }
};
