export const fetchAdminUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Gagal mengambil data user');
        }
        const users = await response.json();
        return users[1]
    } catch (error) {
        console.log(error);
        return null;
    }
};