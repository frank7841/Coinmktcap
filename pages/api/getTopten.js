export default function hundler(req, res){
    const getData = async()=>{
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API}`,
        {
            method:'GET',
            headers:{
                Accept:'*/*'
            },
        },
        )
        const data = await response.json()
        res.status(200).json({data})
    }
    getData()
}
