import { useModal } from "../context/modal"
import Milestone from "./Milestone"

export default function Modal(props) {
    const { isOpen, setIsOpen, component } = useModal()
    return isOpen ? (
        <div className="absolute top-0 bg-white  text-black w-full h-screen">
            <div className="w-screen mx-auto container bg-gray-100 opacity-100 border p-5 rounded">
                {component}
            </div>
        </div>
    ) : null
}