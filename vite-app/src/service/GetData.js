const getMessage = async () => {
    const url = 'localhost:8000/api/chatbot?message=hello how are you'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Respone status: ${response.status}`)
        }

        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.error(error.message)
    }
}