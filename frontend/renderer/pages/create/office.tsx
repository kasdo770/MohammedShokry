import Link from "next/link";
import React, { useState , useEffect } from "react";
import Input from "../../components/Input";
import { useAnotherPaymentsBillStore } from "../../store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import TextArea from "../../components/Textarea";
function Office() {
	const {
		amount,
		date,
		inReturn,
		projectName,
		description,
		saveBill,
		setAmount,
		setDate,
		setDescription,
		setInReturn,
		setProjectName,
		resetState,
	} = useAnotherPaymentsBillStore((state) => state);

	const [infoMessage, setInfoMessage] = useState({
		message: "",
		error: false,
	});
	useEffect(() => resetState(), []);

	const router = useRouter();

	async function handleSave() {
		saveBill()
			.then((result) => {
				if(result.error == true) return setInfoMessage({
					message: result.message,
					error: true,
					
				});
				setInfoMessage({ message: result.message, error: false });
				router.push("/");
				console.log('gay');

			})
			.catch((err) => {
				console.log(err)
				setInfoMessage({
					message: err.response.data,
					error: true,
				});
			});
	}

	return (
        <div className="space-y-12">
			<header className="flex justify-between items-start">
				<div className="flex flex-col items-start gap-2">
					<h1 className="text-black font-bold text-3xl">
						أضافة فاتورة خاصة جديدة
					</h1>
					<p>هنا يمكنك ملئ الحقول لصنع فاتورة خاصة (فاتورة اخرى)</p>
				</div>
				<Link href="/" className="btn-outline px-6" onClick={resetState}>
                    <a className="btn-outline px-6"> 
					ألغاء<XMarkIcon className="w-6 h-6"></XMarkIcon>
					</a>

                </Link>
			</header>
			<main className="">
				<div className="border-black border p-4 w-full bg-base drop-shadow rounded-md space-y-6 relative ">
					<div className="flex gap-4 w-full">
						<Input
							value={projectName}
							label="أسم المشروع"
							type={"text"}
							onChange={(e) => setProjectName(e.target.value)}
						></Input>
						<Input
							value={inReturn}
							label="مقابل"
							type={"text"}
							onChange={(e) => setInReturn(e.target.value)}
						></Input>
						<Input
							value={amount}
							label="المبلغ"
							type={"number"}
							onChange={(e) => setAmount(e.target.value)}
						></Input>
						<Input
							value={date}
							label="التاريخ"
							type={"date"}
							onChange={(e) => setDate(e.target.value)}
						></Input>
					</div>
					<TextArea
						label="ملاحظات"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></TextArea>
					<div></div>
					<div className="bg-secondary flex items-center gap-4 p-4 absolute rounded-b-md -inset-x-[1px] -bottom-16 drop-shadow-md border-black border">
						<button
							className="btn-primary px-12"
							onClick={handleSave}
						>
							حفظ
						</button>
						{infoMessage.message && (
							<h1
								className={`font-bold text-center text-lg ${
									infoMessage.error
										? "text-red-600"
										: "text-green-600"
								}`}
							>
								{infoMessage.message}
							</h1>
						)}
					</div>
				</div>
			</main>
		</div>
    );
}

export default Office;
