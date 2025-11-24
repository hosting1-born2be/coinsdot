'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

type DataRow = {
  typeOfData: string;
  fromDate: string;
  retention?: string;
};

const getData = (t: ReturnType<typeof useTranslations>): DataRow[] => [
  {
    typeOfData: t('0.typeOfData', { fallback: 'Registers data' }),
    fromDate: t('0.fromDate', {
      fallback:
        'From date of termination of transaction or business relationship',
    }),
  },
  {
    typeOfData: t('1.typeOfData', {
      fallback:
        'Copies of identity documents, data received during identification, account/ agreement documentation, other supporting documents obtained from Customer',
    }),
    fromDate: t('1.fromDate', {
      fallback:
        'From date of termination of transaction or business relationship',
    }),
    retention: t('1.retention', { fallback: '8 years' }),
  },
  {
    typeOfData: t('2.typeOfData', {
      fallback:
        'Documents confirming operations/transactions, other related legal documents/data related to the execution of operations or conclusion of transactions',
    }),
    fromDate: t('2.fromDate', {
      fallback: 'From date of execution or conclusion of transaction',
    }),
  },
  {
    typeOfData: t('3.typeOfData', {
      fallback: 'Information linking crypto-asset address to owner identity',
    }),
    fromDate: t('3.fromDate', {
      fallback:
        'From date of termination of transactions or business relationship',
    }),
  },
  {
    typeOfData: t('4.typeOfData', {
      fallback: 'Business correspondence with the Customer',
    }),
    fromDate: t('4.fromDate', {
      fallback:
        'From date of termination of transactions or business relationship',
    }),
    retention: t('4.retention', { fallback: '5 years' }),
  },
  {
    typeOfData: t('5.typeOfData', {
      fallback:
        'Extension for all above data for the protection of our legal interests',
    }),
    fromDate: t('5.fromDate', { fallback: '' }),
    retention: t('5.retention', { fallback: 'Up to 2 additional years' }),
  },
];

export const AdditionalInfoTable = () => {
  const t = useTranslations('additionalInfoTable');

  const data = getData(t);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-[rgba(255,255,255,0.1)] text-left text-sm text-white/60">
        <thead className="bg-transparent text-xl text-white/60">
          <tr>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 font-bold">
              <Text size="lg">
                {t('typeOfData', { fallback: 'Type of Data' })}
              </Text>
            </th>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 font-bold">
              <Text size="lg">
                {t('fromDate', { fallback: 'Start of Retention Period' })}
              </Text>
            </th>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 font-bold">
              <Text size="lg">
                {t('retention', { fallback: 'Storage Duration' })}
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="bg-transparent text-xl">
              <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 align-top font-normal break-words whitespace-normal">
                <Text size="lg">{row.typeOfData}</Text>
              </td>
              <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 align-top font-normal break-words whitespace-normal">
                <Text size="lg">{row.fromDate || ''}</Text>
              </td>
              {i === 0 && (
                <td
                  rowSpan={4}
                  className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 align-middle font-normal break-words whitespace-normal"
                >
                  <Text size="lg">{t('8years', { fallback: '8 years' })}</Text>
                </td>
              )}
              {i >= 4 && (
                <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-2.5 align-top font-normal break-words whitespace-normal">
                  <Text size="lg">{row.retention || ''}</Text>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
