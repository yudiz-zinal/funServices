import { atom } from 'recoil';

const accountAtom = atom<AccountModel | undefined>({
    key: 'accountAtom',
    default: undefined,
});

export { accountAtom };
