
interface Props {
    title: string,
    options: []
}

const AdvancedFilter = ({
    title,
    options
}:Props) => {
  return (
    <div>
        <h6 className="text-xs font-bold py-2">{title}</h6>
        <ul>
            {options.map((item, index) => {
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