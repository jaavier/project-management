import { useState } from 'react';

const TextField = (props) => {
    const className = 'form-control border border-gray-700 rounded-sm p-1 outline-none w-full';
    return (
        <div className="mb-2 mr-5 flex-1">
            <div className="pb-2">
                <label htmlFor={props.name} className="font-light">{props.label}</label>
            </div>
            <div className="flex-1">
                {
                    !props.multiline ? <input
                        className={className}
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    /> : <textarea
                        className={className}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        rows={props.rows}
                        placeholder={props.placeholder}
                    />
                }
            </div>
        </div>
    );
}
export default function CreateProject(props) {
    const [project, setProject] = useState({
        name: '',
        image: '',
        url: '',
        github: '',
        technologies: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(project);
    }

    return (
        <div>
            <div className="mb-5">
                <h1 className="text-lg font-semibold">Create Project {project.url}</h1>
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
                <div>
                    <button type="submit" className="bg-blue-700 text-blue-100 p-3  rounded-lg text-sm font-semibold">Submit</button>
                </div>
            </form>
        </div>
    )
}