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
                        onChange={props.handleChange}
                    /> : <textarea
                        className={className}
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                        rows={props.rows}
                    />
                }
            </div>
        </div>
    );
}
export default function CreateProject(props) {
    const handleChange = (e) => {
    }
    return (
        <div>
            <div className="mb-5">
                <h1 className="text-lg font-semibold">Create Project</h1>
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group flex">
                    <TextField type="text" label="Project Name" name="projectName" placeholder="Project Name" value={props.projectName} onChange={handleChange} />
                    <TextField type="text" label="projectImage" name="projectImage" placeholder="Project Image" value={props.projectImage} onChange={handleChange} />
                </div>
                <div className="form-group flex">
                    <TextField type="text" label="projectUrl" name="projectUrl" placeholder="Project Url" value={props.projectUrl} onChange={handleChange} />
                    <TextField type="text" label="projectGithub" name="projectGithub" placeholder="Project Github" value={props.projectGithub} onChange={handleChange} />
                    <TextField type="text" label="projectTechnologies" name="projectTechnologies" placeholder="Project Technologies" value={props.projectTechnologies} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <TextField multiline={true} rows="5" label="projectDescription" name="projectDescription" placeholder="Project Description" value={props.projectDescription} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit" className="bg-blue-700 text-blue-100 p-3  rounded-lg text-sm font-semibold">Submit</button>
                </div>
            </form>
        </div>
    )
}