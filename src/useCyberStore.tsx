import { create } from 'zustand';
import { StatsForm, RoleForm, StatsStore } from './types';

type State = {
    basicInfo: RoleForm,
    statsInfo: StatsStore
}

type Action = {
    setBasicInfo(newState: RoleForm): void,
    setStatsInfo(newState: StatsForm): void,
}

const useCyberStore = create<State & Action>(set => ({

    basicInfo: {
        handle: "",
        age: 0,
        skills: [],
        role: "",
        roleSkill: "",
        roleInfo: "",
    },
    setBasicInfo: (newState) => set(() => ({
        basicInfo: newState
    })),

    statsInfo: {
        body: 0,
        cool: 0,
        emp: 0,
        int: 0,
        luck: 0,
        ref: 0,
        tech: 0,
    },
    setStatsInfo: (newState) => set(() => ({
        statsInfo: {
            body: newState.body ? newState.body : 0,
            cool: newState.cool ? newState.cool : 0,
            emp: newState.emp ? newState.emp : 0,
            int: newState.int ? newState.int : 0,
            luck: newState.luck ? newState.luck : 0,
            ref: newState.ref ? newState.ref : 0,
            tech: newState.tech ? newState.tech : 0,
        }
    })),

}))

export default useCyberStore;