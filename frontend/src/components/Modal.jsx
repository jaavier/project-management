import { useModal } from "../context/modal"

export default function Modal(props) {
    const { isOpen, setIsOpen, component } = useModal()
    return isOpen ? (
        <div className="absolute top-0 bg-white  text-black w-full h-screen">
            <div className="w-screen mx-auto container bg-gray-100 opacity-100 border p-5 rounded relative">
                <div className="absolute right-5 top-5">
                    <button onClick={() => setIsOpen(false)}>&times;</button>
                </div>
                {component}
            </div>
        </div>
    ) : null
}