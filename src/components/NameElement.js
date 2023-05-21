const NameElement = ({country}) => {

    const commonName = country.name.common
    const officialName = country.name.official

    let nativeNameObj = {}
    // this will be the set of keys for our name obj
    let keyArray = []

    if (country.name.nativeName) {
        console.log("country has native name")
        nativeNameObj = country.name.nativeName
        console.log("native name obj:", nativeNameObj)
        keyArray = Object.keys(nativeNameObj)
        const englishIndex = keyArray.indexOf("eng")
        console.log("key array: ", keyArray)
        if (englishIndex !== -1) {
            keyArray.splice(englishIndex, 1)
            console.log("Eng detected, spliced key array: ", keyArray)
        }
    } 

    for (let index = 0; index < keyArray.length; index++) {
        const key = keyArray[index]
        console.log("A:", nativeNameObj[key].common)
        console.log("B:", nativeNameObj[key].official)
        if (nativeNameObj[key].common === commonName && nativeNameObj[key].official === officialName){
            console.log("we have a match eng name = native name")
            keyArray.splice(index, 1)    
            console.log("keyArray:", keyArray) 
            index--   
        }
    }

    const elementToDisplayArray = keyArray.map( (language, index) => {
        const nativeName = country.name.nativeName[language]
        const common = nativeName.common
        const official = nativeName.official
        //check if language is Eng or if native name is same as Eng name
        if (language === "eng" || (common === commonName && official === officialName)) {
            keyArray.splice(index, 1)
            return null
        } else {
            return ([common, official])
        }
    })

    //adds english name to front of array
    elementToDisplayArray.unshift([commonName, officialName])
    console.log("array of elements to display:", elementToDisplayArray)

    const arrayOfElements = elementToDisplayArray.map( (nameElement, index) => {
        const common = nameElement[0]
        const official = nameElement[1]
        const numberOfNames = elementToDisplayArray.length

        if (numberOfNames <= 2) {
            return(
                <aside className="name-box" key={index}>
                    <h2>{common}</h2>
                    {(official !== common) ? <h3>{official}</h3> : null}
                </aside>)
        } else if (numberOfNames > 2 && index === 0) {
            return(
                <aside className="name-box-full" key={index}>
                    <h2>{common}</h2>
                    {(official !== common) ? <h3>{official}</h3> : null}
                </aside>)
        } else {
            return(
                <aside key={index} className="name-box-small">
                    <h3>{common}</h3>
                    <h4>{official}</h4>
                </aside>
            )
        }

    })

    //TODO split this up for if there are more than one native name 
    //display it on the next line with english on top

    //if there is one single native name along with english, if
    //the common name is the same do not display it twice

    return (
      <aside className="name-element">
            {arrayOfElements}
        </aside>
    )
}
  
export default NameElement