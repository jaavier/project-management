import { useState } from 'react';
import TextField from './Forms/TextField';
import { DateTime } from 'luxon';

export default function Milestone(props) {
    const { saveMilestone, addMilestone, milestoneCounter, index } = props;
    const [milestone, setMilestone] = useState({
        title: '',
        description: '',
        deadLine: '',
        tags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMilestone({ ...milestone, [name]: value })
    }

    return (
        <div className="">
            <div className="mb-5">
                <h1 className="text-lg font-semibold">Create Milestone #{milestoneCounter}</h1>
            </div>
            <div>
                <div className="form-group">
                    <TextField type="text" label="Title" name="title" placeholder="Milestone Title" value={milestone.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <TextField multiline={true} rows={5} type="text" label="Description" name="description" placeholder="Milestone Description" value={milestone.description} onChange={handleChange} />
                </div>
                <div className="form-group flex">
                    <TextField type="date" label="Deadline" name="deadLine" placeholder="Milestone Deadline" value={milestone.deadLine} onChange={handleChange} />
                    <TextField type="text" label="Tags" name="tags" placeholder="Milestone Tags" value={milestone.tags} onChange={handleChange} />
                </div>
                <div className="form-group flex my-4">
                    <div className="mr-3">
                        <button className="bg-green-700 text-green-100 p-2 rounded-lg text-xs font-semibold" onClick={(e) => saveMilestone(e, milestone, index)}>Save</button>
                    </div>
                    <div className="">
                        <button className="bg-blue-700 text-blue-100 p-2 rounded-lg text-xs font-semibold" onClick={addMilestone}>Add new</button>
                    </div>
                </div>
            </div>
        </div>
    )
}