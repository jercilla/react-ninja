import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        console.debug('useEffect', data)
        setIsLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setIsError(false)
            })
            .catch(err => {
                console.debug('Error:', err)
                setIsError(true)
            })
            .finally(()=> setIsLoading(false))
    },[url])

    return {data, isLoading, isError}
}

export default useFetch