
interface Props {
    specification: any[]
}

const AdvancedFilter = ({
    specification
}:Props) => {
    
  return (
    <div>
        <h6 className="text-xs font-bold py-2">{specification[0]}</h6>
        <ul>
            {specification[1].map((item:string, index:number) => {
                return (
                    <li key={index} className="text-xs">
                        <input type="checkbox" className="mr-2" />
                        {item}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default AdvancedFilter