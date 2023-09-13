import RefWord from '../components/RefWord/ui/RefWord.js'
import { useState, useEffect } from 'react'
import { ListWords } from '../entities/words.js'
import { randomizeWords } from '../features/randomizeWords.js'


const useMainContainer = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    const randomizedArray = randomizeWords(ListWords);
    function updateWord(count: number) {
      setCount(count++)
      setData(randomizedArray[count]);
    }
    useEffect(() => {
      setData(randomizedArray[0]);
    }, [randomizedArray]);
    return (
      <>
    <RefWord word={data} />
        {/* это только для теста */}
        <button onClick={() => updateWord(count)}>next word</button>
      </>
    )
  }

export default useMainContainer
