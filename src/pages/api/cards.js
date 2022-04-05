// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const cardName = req.body.cardName

    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${cardName}&contains=imageUrl&pagesize=15&orderby=name`
    )

    const cardList = await response.json()

    console.log(cardList)

    res.status(200).json(cardList)

    // if (response.status == 200) {
    //   return await response.json();
    // }
    // else {
    //   const errorMessage = await response.json();
    //   return {
    //     status: errorMessage.status,
    //     error: errorMessage.error,
    //   }
    // }

  }
}
