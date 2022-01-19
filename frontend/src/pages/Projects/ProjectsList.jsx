import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';


const ProjectTemplate = (props) => {
    const getMilestoneByStatus = (status) => props.milestones.filter(milestone => milestone.status === status).length
    const milestones = {
        pending: getMilestoneByStatus('pending'),
        completed: getMilestoneByStatus('completed'),
        inProgress: getMilestoneByStatus('inProgress'),
    }
    return (
        <div className="p-5 mb-3 bg-white rounded shadow-sm border relative">
            <div className="flex justify-between">
                <div className="flex-1">
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">{props.name}</h1>
                    </div>
                    <div className="">
                        <p className="text-gray-700 text-base">
                            {props.description}
                        </p>
                    </div>
                    <div className="flex absolute bottom-5">
                        <div className="">
                            <span className="text-sm font-semibold mr-1">Created At:</span>
                            <span className="text-sm">
                                {DateTime.fromISO(props.createdAt).toFormat('dd-MM-yyyy')}
                            </span>
                        </div>
                        <div className="ml-4">
                            <span className="text-sm font-semibold mr-1">Updated:</span>
                            <span className="text-sm">
                                {DateTime.fromISO(props.updatedAt).toFormat('dd-MM-yyyy')}
                            </span>
                        </div>
                    </div>

                </div>
                <div className="flex-1">
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Milestones</h1>
                    </div>
                    <div className="flex items-center  my-5">
                        <div className="my-3 flex-1">
                            <div className="text-3xl text-center">
                                {props.milestones.length}
                            </div>
                            <div className="font-light text-lg text-center">
                                Total
                            </div>
                        </div>
                        <div className="my-3 flex-1">
                            <div className="text-gray-700 text-base">
                                <div className="text-3xl text-center">
                                    {milestones.pending}
                                </div>
                                <div className="font-light text-lg text-center">
                                    Pending
                                </div>
                            </div>
                        </div>
                        <div className="my-3 flex-1">
                            <div className="text-gray-700 text-base">
                                <div className="text-3xl text-center">
                                    {milestones.completed}
                                </div>
                                <div className="font-light text-lg text-center">
                                    Completed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Actions</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProjectsList(props) {
    const { get } = useApi('projects');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        get()
            .then(setProjects)
            .catch(err => console.log(err))
    }, [])

    if (!projects.length) return <h1>List all projects</h1>

    return projects.map((project, index) => <ProjectTemplate {...project} key={index} />)
}