import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Worker } from "../typings/interfaces";
import CreateWorkerInput from "./CreateInput";

function ExpenseInputRow({
	id,
	onChange,
	deleteRow,
	index,
}: {
	index: number;
	id: any;
	onChange?: (e: any) => void;
	deleteRow?: (e: any) => void;
}) {
	const [workerData, setWorkerData] = useState<Worker>({
		id: id,
		cost: 0,
		date: "",
		job: "",
		name: "",
		precentage: 0,
	});
	const inputs = [
		{
			placeholder: "اسم المادة",
			name: "materialName",
			type: "text",
		},
		{
			placeholder: "اليوم",
			name: "day",
			type: "text",
		},
		{
			placeholder: "المبلغ",
			name: "materialCost",
			type: "number",
		},
		{
			placeholder: "التاريخ",
			name: "materialDate",
			type: "date",
		},
		{
			placeholder: "كود الفاتورة",
			name: "billCode",
			type: "text",
		},
	];

	function handleChange(e) {
		const { name, value } = e.target;
		setWorkerData((state) => ({ ...state, [name]: value }));
	}
	useEffect(() => setWorkerData((state) => ({ ...state, id: id })), [id]);
	useEffect(() => onChange(workerData), [workerData]);

	return (
		<tr className=" border-2">
			{inputs.map((input, i) => {
				return (
					<td key={input.name + i}>
						<CreateWorkerInput
							{...input}
							onChange={handleChange}
						></CreateWorkerInput>
					</td>
				);
			})}

			<td className="text-center text-base  w-8 ">
				<button
					disabled={index === 0}
					onClick={() => deleteRow(workerData.id)}
					className="p-2 bg-red-500 hover:bg-red-600 mt-1.5 rounded-md transition disabled:bg-red-400"
				>
					<TrashIcon className="w-6 h-6 stroke-2"></TrashIcon>
				</button>
			</td>
		</tr>
	);
}

export default ExpenseInputRow;
