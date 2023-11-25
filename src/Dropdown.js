import { useEffect, useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Panel from "./components/Panel";

function Dropdown({options, onChange, value}){

    const [isOpen,setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        };

        document.addEventListener('click',handler,true);

        return()=>{
            document.removeEventListener('click',handler);
        };
    },[]);

    const handleClick = ()=>{
        setIsOpen(!isOpen);
    };

    const handleOptionSelect =(option)=>{
        setIsOpen(false);
        onChange(option)
    };

    const renderOptions = options.map((option)=>{
        return(
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={()=>handleOptionSelect(option)}
            key ={option.value}>
                {option.label}
            </div>
        );
    });


    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer "
            onClick={handleClick}>{value?.label || 'Select...'}
            <GoTriangleDown className="text-2xl"></GoTriangleDown>
            </Panel>
            {isOpen && <Panel className="absolute top-full ">{renderOptions}</Panel>}
        </div>

        );
}

export default Dropdown;