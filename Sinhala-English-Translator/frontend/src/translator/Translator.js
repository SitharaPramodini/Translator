import { useEffect, useState } from 'react'
import TextBox from '../components/TextBox'
import Arrows from '../components/Arrows'
import Button from '../components/Button'
import Modal from '../components/Modal'
import axios from 'axios'

import './translator.css';

const TranslationApp = () => {
  const [showModal, setShowModal] = useState(false)
  const [languages, setLanguages] = useState(null)
  const [inputLanguage, setInputLanguage] = useState('English') // Use language codes instead of language names
  const [outputLanguage, setOutputLanguage] = useState('Sinhala') // Use language codes instead of language names
  const [textToTranslate, setTextToTranslate] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const getLanguages = async () => {
    try {
      const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
        headers: {
          'X-RapidAPI-Key': '5ea1681722mshe4281d39d525569p1bc598jsn1d943741f58e',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
          'Accept-Encoding': 'application/gzip',
        },
      })
      const filteredLanguages = response.data.data.languages.filter((language) =>
        language.language === 'si' || language.language === 'en'
      );
      setLanguages(filteredLanguages);
      
    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(() => {
    getLanguages()
  }, [])

  const translate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', textToTranslate);
    encodedParams.set('target', outputLanguage);
    encodedParams.set('source', inputLanguage);

    try {
      const response = await axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2', encodedParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '5ea1681722mshe4281d39d525569p1bc598jsn1d943741f58e',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
      })
      setTranslatedText(response.data.data.translations[0].translatedText)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
  }

  return (
    <div className='container'>
          <h1>SINHALA - ENGLISH TRANSLATOR</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="app">

      {!showModal && (
        <>
          <TextBox
            style="input"
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            style="output"
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            translatedText={translatedText}
          />
          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={
            showModal === 'input' ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === 'input' ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
    </div>
  )
}

export default TranslationApp