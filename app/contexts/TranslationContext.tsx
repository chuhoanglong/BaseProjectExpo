import { TxKeyPath } from '@i18n';
import React, {PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';

type obj = {[keys: string]: any};

export type Translator = (key: TxKeyPath, options?: obj) => string;

export type TranslatorFunctions = {
  translator: Translator;
};

type TranslationContextValue = {
  translator: Translator;
};

const TranslationContext = React.createContext<TranslationContextValue>(
  {} as TranslationContextValue,
);

export const TranslationProvider = ({children}: PropsWithChildren) => {
  const {t} = useTranslation();

  const [translator, setTranslator] = React.useState<TranslatorFunctions>({
    translator: (key: string) => key,
  });

  React.useEffect(() => {
    setTranslator({translator: t});
  }, [t]);

  const contextValue = React.useMemo(() => {
    return {
      translator: translator.translator,
    } as TranslationContextValue;
  }, [translator]);

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => React.useContext(TranslationContext);
