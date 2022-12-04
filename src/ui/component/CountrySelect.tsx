import { ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbListSearch } from 'react-icons/tb';

const CountrySelect = ({
  data,
  label,
  showErrors,
  width,
  required,
  setFieldValue,
  filterName,
  fieldName,
}: {
  data: { name: string; id: number; code: string; country: string }[];
  label?: string;
  showErrors: boolean;
  width: string;
  required: boolean;
  setFieldValue: any;
  filterName: string;
  fieldName: string;
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<number>(1);
  const [showSelectItem, setShowSelectItem] = useState<string>('+20');
  const [connectField, setConnectField] = useState<string>('Egypt');
  const [countryIcon, setCountryIcon] = useState<string>('');
  const [ourData] =
    useState<{ name: string; id: number; code: string; country: string }[]>(
      data
    );
  const [searchChange, setSearchChange] = useState<string>('');

  const handelDeleteItem = () => {
    setSelectItem(0);
    setFieldValue(filterName, '');
    setConnectField('');
    setShowSelectItem('');
    setShowList(false);
  };

  useEffect(() => {
    handelDeleteItem();
    setFieldValue(filterName, '+20');
  }, [connectField]);

  return (
    <main className={`${width} relative min-w-[50px]  max-w-[1000px]`}>
      <div className="flex w-[360px] items-center justify-between gap-3 ">
        <p className="mb-[7px] text-[18px] font-medium text-[#524c4c] ">
          Phone number {label}
        </p>
        {showErrors && (
          <div className="text-[13px] font-medium text-red-500">
            <ErrorMessage name={fieldName} />
          </div>
        )}
      </div>
      <div className="absolute ">
        <Field
          type="text"
          name={fieldName}
          className={
            showErrors
              ? 'h-[45px] w-[363.2px] min-w-[250px] max-w-[500px] rounded-[10px] border-2 border-red-500 bg-white  px-4 pl-[110px] text-[18px] text-[#524c4c] focus:outline-red-500'
              : ' h-[45px] w-[363.2px] min-w-[250px] max-w-[500px] rounded-[10px] border-2 border-[#E2E2E2] bg-white px-4 pl-[110px] text-[18px] text-[#524c4c] focus:outline-blue-600'
          }
        />
      </div>

      <div
        onClick={() => {
          setShowList((prev) => !prev);
        }}
        className=" relative flex h-[45px] cursor-pointer items-center gap-2 rounded-[10px] bg-white pl-2  shadow-sm shadow-gray-500 dark:bg-light-gray"
      >
        <span className="flex gap-2 transition-all duration-300 ease-linear dark:text-white">
          {selectItem ? (
            <img
              src={countryIcon}
              alt={countryIcon}
              className="w-5 h-5 rounded-full"
            />
          ) : (
            <img
              src={ourData[0]?.country}
              alt={countryIcon}
              className="w-5 h-5 rounded-full"
            />
          )}
          {selectItem ? showSelectItem : '+20'}
        </span>
        <div className="absolute right-3">
          <AiFillCloseCircle
            onClick={handelDeleteItem}
            className={
              'z-30 hidden  text-[25px] text-red-600 opacity-0 transition-all duration-300 ease-linear'
            }
          />
        </div>
      </div>

      <div
        className={
          showList
            ? `absolute left-[6%] z-50 mx-auto mt-1 h-[220px] w-[350px]  translate-y-0 scale-[1]  overflow-y-scroll rounded-[10px] bg-white opacity-100  shadow-lg shadow-black/50 transition-all duration-200 ease-linear dark:bg-light-gray`
            : `absolute left-[6%] z-50 mx-auto mt-1 h-[0px] w-[350px]  translate-y-[-20px] scale-[0.5] overflow-y-scroll rounded-[10px] bg-white opacity-0  transition-all duration-300 ease-linear dark:bg-light-gray`
        }
      >
        <div className="relative w-full group">
          <TbListSearch className="absolute top-2 text-[25px] text-gray-500 " />
          <input
            type="text"
            placeholder="search here"
            className="w-full py-2 transition-all duration-200 ease-in-out outline-none pl-7 focus:outline-1 focus:outline-blue-600 focus:placeholder:text-blue-600"
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
          />
        </div>

        <ul className="w-full">
          {ourData
            .filter((item) => {
              if (searchChange.length <= 2) {
                return item;
              }
              if (item.name.toLocaleLowerCase().includes(searchChange)) {
                return item;
              }
              return 0;
            })
            .map((item, i) => {
              return (
                <label key={item.id} htmlFor={item.name}>
                  <div
                    onClick={() => {
                      setSelectItem(item.id);
                      setShowSelectItem(item.code);
                      setConnectField(item.name);
                      setCountryIcon(item.country);
                      setShowList(false);
                    }}
                    key={i}
                    className={
                      selectItem === item.id
                        ? ' flex cursor-pointer items-center bg-blue-700 p-2 transition-colors duration-150 ease-linear hover:bg-blue-600'
                        : ' flex cursor-pointer items-center bg-white p-2 transition-colors duration-150 ease-linear hover:bg-blue-600'
                    }
                  >
                    <span>
                      <img
                        src={item.country}
                        alt={item.code}
                        className="w-5 h-5 rounded-full"
                      />
                    </span>
                    <li
                      key={i}
                      className={
                        selectItem === item.id
                          ? 'my-1 translate-x-[15px] cursor-pointer font-medium transition-transform duration-200 ease-in dark:text-white'
                          : 'my-1 translate-x-[5px] cursor-pointer transition-transform duration-200 ease-in dark:text-white'
                      }
                    >
                      {item.name} {item.code}
                    </li>
                    <Field
                      type="radio"
                      required={required}
                      id={item.name}
                      name={filterName}
                      value={selectItem ? item.code : ''}
                      className="opacity-0"
                    />
                  </div>
                </label>
              );
            })}
        </ul>
      </div>
    </main>
  );
};
export default CountrySelect;