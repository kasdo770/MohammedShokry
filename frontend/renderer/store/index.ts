import create, { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { produce } from "immer";
import { v4 } from "uuid";
import _ from "lodash";

export interface ProjectBill {
	id: number;
	name: string;
	clientName: string;
	clientAddress: string;
	officePrecentage: number;
	workers: Worker[];
	revenues: Revenue[];
	expenses: Expense[];
	sections: Section[];
	date: string;
}

export interface Worker {
	id: string;
	name: string;
	work: string;
	project?: {
		id: number;
		salary: number;
		precentage?: number;
		date: string;
	};
}

export interface Revenue {
	id: string;
	amount: number;
	date: string;
}

export interface Section {
	id: string;
	name: string;
	expenses: Expense[];
}

export interface Expense {
	id: string;
	materialName: string;
	totalcost: number;
	day: string;
	section?: Section;
	date: string;
}

export interface State {
	dropdownWorkers: Worker[];
	homePublicBills: ProjectBill[];
	homeOfficeBills: ProjectBill[];
	searchState: "loading" | "empty" | "found";
	setHomePublicBills: (projectBills: ProjectBill[]) => void;
	setHomeOfficeBills: (projectBills: ProjectBill[]) => void;
	setDropdownWorkers: (workers: Worker[]) => void;
	newDropdownWorker: (worker: Worker) => void;
	setSearchState: (state: "empty" | "loading" | "found") => void;
}

const storeSlice: StateCreator<
	State & newProjectBill,
	[["zustand/devtools", never]],
	[],
	State
> = (set) => ({
	dropdownWorkers: [],
	homePublicBills: [],
	homeOfficeBills: [],
	searchState: "empty",
	setHomePublicBills: (bills) => set(() => ({ homePublicBills: bills })),
	setHomeOfficeBills: (bills) => set(() => ({ homeOfficeBills: bills })),
	setDropdownWorkers: (workers) => set(() => ({ dropdownWorkers: workers })),
	newDropdownWorker: (worker) =>
		set((state) => {
			return { workers: [...state.workers, worker] };
		}),
	setSearchState: (state) => set(() => ({ searchState: state })),
});

export interface newProjectBill {
	id: number;
	name: string;
	clientName: string;
	clientAddress: string;
	officePrecentage: number;
	workers: Worker[];
	revenues: Revenue[];
	expenses: Expense[];
	sections: Section[];
	date: string;

	setName: (name: string) => void;
	setClientName: (name: string) => void;
	setClientAddress: (address: string) => void;
	setOfficePrecentage: (precentage: number) => void;
	setDate: (date: string) => void;
	addWorker: (workerId: string) => void;
	updateWorker: (workerId: string, data: Partial<Worker>) => void;
	removeWorker: (id: string) => void;
	addRevenue: () => void;
	updateRevenue: (id: string, data: Partial<Revenue>) => void;
	removeRevenue: (id: string) => void;
	addExpense: (sectionId: string) => void;
	updateExpense: (id: string, data: Partial<Expense>) => void;
	removeExpense: (id: string) => void;
	addSection: () => void;
	updateSection: (id: string, data: Partial<Section>) => void;
	removeSection: (id: string) => void;
}

const newProjectBillSlice: StateCreator<
	State & newProjectBill,
	[["zustand/devtools", never]],
	[],
	newProjectBill
> = (set) => ({
	id: 0,
	officePrecentage: 0,
	name: "",
	clientName: "",
	clientAddress: "",
	date: "",
	expenses: [],
	revenues: [],
	sections: [],
	workers: [],

	setName: (name) => set(() => ({ name })),
	setClientName: (name) => set(() => ({ clientName: name })),
	setClientAddress: (address) => set(() => ({ clientAddress: address })),
	setOfficePrecentage: (precentage) =>
		set(() => ({ officePrecentage: precentage })),
	setDate: (date) => set(() => ({ date: date })),
	addWorker: (workerId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				draft.workers.push(
					draft.dropdownWorkers.find(
						(worker) => worker.id === workerId,
					),
				);
			}),
		);
	},
	updateWorker: (workerId, data) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let workerIndex = draft.workers.findIndex(
					(worker) => worker.id === workerId,
				);
				draft.workers[workerIndex] = _.merge<Partial<Worker>, Worker>(
					data,
					draft.workers[workerIndex],
				);
			}),
		);
	},
	removeWorker: (workerId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let workerIndex = draft.workers.findIndex(
					(worker) => worker.id === workerId,
				);
				if (workerIndex)
					draft.workers = draft.workers.splice(workerIndex, 1);
			}),
		);
	},
	addRevenue: () => {
		set(
			produce<State & newProjectBill>((draft) => {
				draft.revenues.push({
					id: v4(),
					amount: 0,
					date: "",
				});
			}),
		);
	},
	updateRevenue(revenueId, data) {
		set(
			produce<State & newProjectBill>((draft) => {
				let revenueIndex = draft.revenues.findIndex(
					(revenue) => revenue.id === revenueId,
				);
				draft.revenues[revenueIndex] = _.merge<
					Partial<Revenue>,
					Revenue
				>(data, draft.revenues[revenueIndex]);
			}),
		);
	},
	removeRevenue: (revenueId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let revenueIndex = draft.revenues.findIndex(
					(revenue) => revenue.id === revenueId,
				);
				if (revenueIndex)
					draft.revenues = draft.revenues.splice(revenueIndex, 1);
			}),
		);
	},
	addSection: () => {
		set(
			produce<State & newProjectBill>((draft) => {
				draft.sections.push({ id: v4(), expenses: [], name: "" });
			}),
		);
	},
	updateSection(sectionId, data) {
		set(
			produce<State & newProjectBill>((draft) => {
				let sectionIndex = draft.sections.findIndex(
					(section) => section.id === sectionId,
				);
				draft.sections[sectionIndex] = _.merge<
					Partial<Section>,
					Section
				>(data, draft.sections[sectionIndex]);
			}),
		);
	},
	removeSection: (sectionId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let sectionIndex = draft.sections.findIndex(
					(section) => section.id === sectionId,
				);
				if (sectionIndex)
					draft.sections = draft.sections.splice(sectionIndex, 1);
			}),
		);
	},
	addExpense: (sectionId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let sectionIndex = draft.sections.findIndex(
					(section) => section.id === sectionId,
				);
				let newExpense: Expense = {
					id: v4(),
					section: draft.sections[sectionIndex],
					date: "",
					day: "",
					materialName: "",
					totalcost: 0,
				};
				draft.expenses.push(newExpense);
				draft.sections[sectionIndex].expenses.push(newExpense);
			}),
		);
	},
	updateExpense(expenseId, data) {
		set(
			produce<State & newProjectBill>((draft) => {
				let expenseIndex = draft.expenses.findIndex(
					(expense) => expense.id === expenseId,
				);
				draft.expenses[expenseIndex] = _.merge<
					Partial<Expense>,
					Expense
				>(data, draft.expenses[expenseIndex]);
			}),
		);
	},
	removeExpense: (expenseId) => {
		set(
			produce<State & newProjectBill>((draft) => {
				let expenseIndex = draft.expenses.findIndex(
					(expense) => expense.id === expenseId,
				);
				let sectionIndex = draft.sections.findIndex(
					(section) => section.id === draft.expenses[expenseIndex].id,
				);

				draft.expenses.splice(expenseIndex, 1);

				let expenseIndexInSectionExpenses = draft.sections[
					sectionIndex
				].expenses.findIndex(
					(expense) => expense.id === draft.expenses[expenseIndex].id,
				);

				draft.sections[sectionIndex].expenses.splice(
					expenseIndexInSectionExpenses,
					1,
				);
			}),
		);
	},
});

export const useStore = create<State & newProjectBill>()(
	devtools(
		(...a) => ({ ...storeSlice(...a), ...newProjectBillSlice(...a) }),
		{
			name: "app-storage",
		},
	),
);
