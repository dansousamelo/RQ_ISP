export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
};

export const formatDataWithHours = (date: Date) => {
    const optionsDate: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsTime: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

    const formattedDate = new Date(date).toLocaleDateString('pt-BR', optionsDate);
    const formattedTime = new Date(date).toLocaleTimeString('pt-BR', optionsTime);

    return `${formattedDate} às ${formattedTime}`;
};