import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useModal } from "../../context/modal";
import Milestone from "../../components/Milestone";

const statusStyle = (status) => {
    switch (status) {
        case "pending":
            return "bg-yellow-200 text-yellow-900";
        case "inProgress":
            return "bg-orange-200 text-orange-900";
        case "completed":
            return "bg-green-200 text-green-900";
        default:
            return "bg-gray-200 text-gray-900";
    }
}

export default function ViewProject(props) {
    const { projectId } = useParams();
    const { get } = useApi('projects');
    const { isOpen, setIsOpen, setComponent } = useModal();
    const [project, setProject] = useState({});

    useEffect(() => {
        get({
            params: { projectId }
        })
            .then(project => {
                if (project && project.length)
                    setProject(project[0]);
            })
            .catch(err => console.log(err))
    }, [])

    if (!project._id) return <h1>Loading...</h1>

    return (
        <div className="w-full border relative p-7 my-5 rounded shadow-xl">
            <div className="flex">
                <div className="w-1/5">
                    <div className="font-semibold text-xl">{project.name}</div>
                    <div className="font-light text-xs">{DateTime.fromISO(project.createdAt).toFormat('dd LLL yyyy')}</div>
                </div>
                <div className="w-full">
                    <div class="grid grid-cols-3 gap-4">
                        {
                            project.milestones.map(milestone => (
                                <>
                                    <div className="border relative rounded-md shadow-lg">
                                        <div className={`text-xs font-extralight absolute left-0 top-0 p-1 rounded-b rounded-l ${statusStyle(milestone.status || 'pending')}`}>{milestone.status || 'pending'}</div>
                                        <div className="font-extralight text-xs absolute right-0 bg-gray-600 p-1 text-gray-100 rounded-r rounded-b">{DateTime.fromISO(milestone.createdAt).toFormat('dd LLL yyyy')}</div>
                                        <div className="p-3 mt-3">
                                            <div className="flex items-center mt-3">
                                                <div className="font-semibold">{milestone.title}</div>
                                            </div>
                                            <div className="py-3 text-xs">
                                                {milestone.description}
                                            </div>
                                            <div className="">
                                                <div className="text-xs font-light mr-1">Tags:</div>
                                            </div>
                                        </div>
                                    </div>                                <div className="border relative rounded-md shadow-lg">
                                        <div className={`text-xs font-extralight absolute left-0 top-0 p-1 rounded-b rounded-l ${statusStyle(milestone.status || 'pending')}`}>{milestone.status || 'pending'}</div>
                                        <div className="font-extralight text-xs absolute right-0 bg-gray-600 p-1 text-gray-100 rounded-r rounded-b">{DateTime.fromISO(milestone.createdAt).toFormat('dd LLL yyyy')}</div>
                                        <div className="p-3 mt-3">
                                            <div className="flex items-center mt-3">
                                                <div className="font-semibold">{milestone.title}</div>
                                            </div>
                                            <div className="py-3 text-xs">
                                                {milestone.description}
                                            </div>
                                            <div className="">
                                                <div className="text-xs font-light mr-1">Tags:</div>
                                            </div>
                                        </div>
                                    </div></>
                            ))
                        }
                        <div className="flex items-center justify-center">
                            <div className="border relative rounded-md shadow-lg h-20 w-20 flex items-center">
                                <div className="w-full text-center">
                                    <h1 className="text-5xl text-gray-400">
                                        <button onClick={() => {
                                            setIsOpen(!isOpen);
                                            setComponent(<Milestone milestoneCounter={project.milestones.length + 1} />)
                                        }}>+</button>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}