import { create } from 'zustand';
import { BasicRole, BasicStats } from './types';

type State = {
    basicInfo: BasicRole,
    statsInfo: BasicStats
}

type Action = {
    setBasicInfo(newState: BasicRole): void,
    setStatsInfo(newState: BasicStats): void,
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
        statsInfo: newState
    })),

}))

export default useCyberStore;