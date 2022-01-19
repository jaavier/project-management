import { useState } from 'react';
import TextField from '../../components/Forms/TextField';
import Milestone from '../../components/Milestone';
import useApi from '../../hooks/useApi';
import { DateTime } from 'luxon';

export default function CreateProject(props) {
    const { post, responses } = useApi('projects');
    const [project, setProject] = useState({
        name: '',
        image: '',
        url: '',
        github: '',
        technologies: '',
        description: '',
        milestones: [],
    })

    const [milestoneCounter, setMilestoneCounter] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await post({
                body: project
            });
        } catch (e) {
            alert("ERROR")
        }
    }

    const addMilestone = (e) => {
        e.preventDefault();
        setMilestoneCounter(milestoneCounter + 1);
    }

    const saveMilestone = (e, milestone, index) => {
        e.preventDefault();
        const allMilestones = project.milestones;
        allMilestones[index] = { ...milestone, deadLine: DateTime.fromISO(milestone.deadLine) }
        setProject({
            ...project, milestones: allMilestones
        })
    }

    return (
        <div>
            <div className="mb-5">
                <h1 className="text-lg font-semibold">Create Project</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group flex">
                    <TextField type="text" label="Project Name" name="name" placeholder="Project Name" value={project.name} onChange={handleChange} />
                    <TextField type="text" label="Image" name="image" placeholder="Project Image" value={project.image} onChange={handleChange} />
                </div>
                <div className="form-group flex">
                    <TextField type="text" label="Url" name="url" placeholder="Project Url" value={project.url} onChange={handleChange} />
                    <TextField type="text" label="Github" name="github" placeholder="Project Github" value={project.github} onChange={handleChange} />
                    <TextField type="text" label="Technologies" name="technologies" placeholder="Project Technologies" value={project.technologies} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <TextField multiline={true} rows="5" label="Description" name="description" placeholder="Project Description" value={project.description} onChange={handleChange} />
                </div>
                <div className="form-group mb-2 flex items-center">
                    <div>
                        <h1 className="text-lg font-semibold">Milestones</h1>
                    </div>
                    <div className="ml-2">
                        <button
                            className="bg-blue-700 text-blue-100 p-2 rounded-lg text-xs font-semibold"
                            onClick={addMilestone}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    {
                        Array(milestoneCounter).fill(0).map((_, index) => {
                            return <Milestone index={index} saveMilestone={saveMilestone} addMilestone={addMilestone} milestoneCounter={milestoneCounter} />
                        })
                    }
                </div>
                <div>
                    <button type="submit" className="bg-blue-700 text-blue-100 p-3  rounded-lg text-sm font-semibold">Submit</button>
                </div>
            </form>
        </div>
    )
}