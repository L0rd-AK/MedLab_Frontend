import { Link } from "react-router-dom";

const TestCard = ({test}) => {
    const {_id,testName,imageUrl,price,date,slots}=test;
    return (
        <tbody className="text-center">
            {/* row 1 */}
            <tr>
                <th className="flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </th>
                <td>
                    <div>
                        <div className="font-bold text-left">{testName}</div>
                        <div className="text-sm opacity-50 text-left">MedLab Ltd.</div>
                    </div>
                </td>
                <td>
                    {date}
                </td>
                <td>{slots}</td>
                <td>{price}</td>
                <th>
                    <Link to={`/all-tests/${_id}`}><button className="btn btn-ghost btn-xs BgPrimary">details</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default TestCard;