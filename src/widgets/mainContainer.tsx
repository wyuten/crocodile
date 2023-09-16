import RefWord from '../components/RefWord/ui/RefWord.js'
import { useState, useEffect } from 'react'
import { ListWords } from '../entities/words/model/words.js'
import { randomizeWords } from '../features/randomizeWords/lib/randomizeWords.js'


const randomizedArray = randomizeWords(ListWords);

const useMainContainer = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    function updateWord(count: number) {
      setCount(count++)
      console.log(count)
      setData(randomizedArray[count]);
    }
    return (
      <>
    <RefWord word={data} />
        {/* это только для теста */}
        {count}
        <button onClick={() => updateWord(count)}>next word</button>
      </>
    )
  }

export default useMainContainer
