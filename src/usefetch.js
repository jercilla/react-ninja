import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        console.debug('useEffect', data)
        const abortController = new AbortController()
        setIsLoading(true)
        fetch(url, {signal: abortController.signal})
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setIsError(false)
            })
            .catch(err => {
                if (err.name === 'AbortController') {
                    console.debug('Fetch aborted')
                } else {
                    console.debug('Error:', err)
                    setIsError(true)
                }
            })
            .finally(()=> setIsLoading(false))
        return () => abortController.abort()
    },[url])

    return {data, isLoading, isError}
}

export default useFetch