export const createdDate = (date) => {
    const newDate = new Date(date);
    newDate.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return newDate;
}