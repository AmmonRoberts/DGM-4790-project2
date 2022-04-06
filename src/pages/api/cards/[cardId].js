


export default async function handler(req, res) {

    if (req.method === 'GET') {

        const { cardId } = req.query


        const response = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`)

        const card = await response.json()

        // console.log(card)

        res.status(200).json(card)

        //   const response = await fetch(`https://api.magicthegathering.io/v1/cards?id=${cardId}`)
        //   if (response.status == 200) {
        //     return await response.json();
        //   }
        //   else {
        //     return {
        //       status: response.status,
        //       error: response.error,
        //     }
        //   }

    }
}