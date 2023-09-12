import RefWord from '../components/RefWord/ui/RefWord.js'
import { useState, useEffect } from 'react'
import { ListWords } from '../entities/words.js'
import { randomizeWords } from '../features/randomizeWords.js'


const useMainContainer = () => {
    const [data, setData] = useState();
    // const [counter, updateCounter] = useState();
    useEffect(() => {
      const fo = randomizeWords(ListWords)
      setData(fo[0]);
    }, []);

    return (<RefWord word={data} />)
  }

export default useMainContainer
