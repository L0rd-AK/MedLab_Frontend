import { Link } from "react-router-dom";

const TestResultCard = ({test}) => {
    return (
        <tbody className="text-center">
            {/* row 1 */}
            <tr>
                <th className="flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={test.imageUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </th>
                <td>
                    <div>
                        <div className="font-bold text-left">{test.testName}</div>
                        <div className="text-sm opacity-50 text-left">MedLab Ltd.</div>
                    </div>
                </td>
                <td>
                    {test?.currentDate}
                </td>
                <td>
                    {test.date}
                </td>
                <td>{test.slots}</td>
                <td>
                   {
                    test?.approved?
                    <Link><button className="btn btn-ghost btn-md BgPrimary">Print report</button></Link>
                    :
                    <Link><button className="btn btn-ghost btn-md BgPrimary">Pending</button></Link>
                   }
                </td>
            </tr>
        </tbody>
    );
};

export default TestResultCard;