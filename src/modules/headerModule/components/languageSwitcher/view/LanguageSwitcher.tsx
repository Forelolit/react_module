import { CustomSelect } from '@ui/index';
import { languages } from '@utils/constants/constants';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (val: string) => {
    i18n.changeLanguage(val);
  };

  const options = languages.map(({ label, value }) => ({ label, value }));

  return <CustomSelect value={i18n.language} onChange={handleLangChange} options={options} />;
};
