export const getDaysInRange = () => {
    const currentDate = new Date();

    try {
        const currentNow = currentDate.setDate(currentDate.getDate());
        const lastWeek = currentDate.setDate(currentDate.getDate() - 7);
        const lastMonth = currentDate.setDate(currentDate.getDate() - 21);
        return [lastMonth, lastWeek, currentNow];
    } catch (e) {
        return [0, 0, 0];
    }
};