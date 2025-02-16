import { PrinterIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	Expense,
	ProjectBill,
	Revenue,
	Section,
	useStore,
	Worker,
} from "../store";
import PreviewInput from "../components/PreviewInput";
import PrintAggregateInput from "../components/PrintAggregateInput";

import PreviewWorker from "../components/PreviewWorker";
import PreviewExpenses from "../components/PreviewExpenses";
import PreviewRevenues from "../components/PreviewRevenues";
import { useRouter } from "next/router";
import { v4 } from "uuid";
interface IProps {
	readOnly?: boolean;
}
function AggregateBillTable(Date , { readOnly }: IProps,) {
	const aggregates = Date.Date.billData;
	const totalrev = Date.Date.billData.totalRevenues
	const totalcost = Date.Date.billData.totalCost

	const router = useRouter();
	const {
		clientName,
		clientAddress,
		name,
		date,
		officePrecentage,
		editBill,
		restState,
	} = useStore();
	const [infoMessage, setInfoMessage] = useState({
		message: "",
		error: false,
	});




	return (
		<div className="space-y-6 ">
			<main className="">
				<div className="border-black border mx-auto mt-[10rem] p-3 w-full bg-base drop-shadow rounded-t-md space-y-3 relative ">
					{aggregates.result.map((aggregate)=>{
					return(
					<>
					<div className="flex justify-center">
					<PreviewInput
												disabled
												type={"text"}
												value={aggregate.name}
												
												placeholder={"الاسم"}
					></PreviewInput>
						<PreviewInput
												disabled
												type={"text"}
												value={aggregate.totalCost}
												
												placeholder={"ألبملغ"}
					></PreviewInput>
					</div>
					</>
					)
					})}
					<div>
					
					</div>
					<div className="bg-secondary  items-start p-4 absolute    rounded-b-md -inset-x-[1px] drop-shadow-md border-black border">
						<div className="flex justify-start">
						<PrintAggregateInput
												disabled
												type={"number"}
												value={totalrev}
												
												label="البنود الكلي"
					></PrintAggregateInput>
							
							<PrintAggregateInput
												disabled
												type={"number"}
												value={totalcost}
												
												label="المجموع الكلي"
					></PrintAggregateInput>
									
						</div>
						
					</div>	
					
					</div>
					
				
			</main>
			<div>
				<div className=" print:hidden absolute -inset-x-[1px] bottom-0 mb-2 mx-4 z-0 	">
					<button className="bg-primary text-white rounded-full p-1 hover:bg-violet-600 active:bg-violet-800 " onClick={()=>{
			window.print()
			
			
			

		}}>
			<PrinterIcon className="w-5 h-5 m-1 rounded-full "></PrinterIcon>
		</button>
					</div>
				</div>
		</div>
	);
}

export default AggregateBillTable;


