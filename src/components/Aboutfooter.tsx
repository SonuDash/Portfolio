import {Circle, Dna, Globe2, Globe2Icon, Languages} from "lucide-react"

const Aboutfooter = () => {


    const items = [
        {name:"Language", answer:"English, Hindi, Odia", icon:<Languages className="h-8 w-8" />},
        {name:"Nationality",answer:"Indian", icon:<Globe2Icon   className="h-8 w-8" />},
        {name:"Gender",answer:"Male (He/Him)", icon:<Dna  className="h-8 w-8" />},
    ]


    return(
        <>
        {
            items.map((val, indx) => {
              return(
                <div className="p-1 w-fit relative" key={indx}>
                <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
                <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                <Circle className="h-2 w-2" /> {val.answer}
                </div>
            </div>
              )
            })
          }
         
        </>
    )
}

export default Aboutfooter
