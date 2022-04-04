import React from 'react'
import PropTypes from 'prop-types'
import RouterAnimation from '../components/layout/RouterAnimation'
import TableRow from '../components/statistics/TableRow'
import TableSkeleton from '../components/skeletons/statistics/TableSkeleton';
import ReactTooltip from 'react-tooltip';

const Statistics = ({ clinics, loading }) => {

  // Map through clinics and return table rows filled with data
  const printTableRows = () => {
    return clinics.map((clinic, index) => {
      return <TableRow key={clinic.id} clinic={clinic} index={index}/>
    })
  }

  if (loading) {
    return <TableSkeleton />
  }
  return (
    <RouterAnimation>
      <section className='p-5'>
        <h3 className="text-3xl text-gray-700 font-semibold text-center">Statystyki Świadczeniodawców</h3>
        <p className="lead text-center hidden sm:block text-gray-500 xl:hidden">On medium devices: scroll on the bottom of table</p>

        {/* tailwind-elements table */}
        <div className="flex flex-col mt-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-emerald-600">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Świadczeniodawca 
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Oczekujący <i className='bx bx-info-circle' data-tip data-for='awaitingInfo'></i>
                        <ReactTooltip id='awaitingInfo' effect='solid'>
                          <span>
                            Liczba osób wpisanych na listę oczekujących na świadczenie zdrowotne wg stanu na koniec miesiąca.<br/>
                            W liczbie tej nie uwzględniane są osoby kontynuujące <br/>
                            leczenie oraz osoby z uprawnieniami do korzystania ze świadczeń poza kolejnością.
                          </span>
                        </ReactTooltip>
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Zakończone <i className='bx bx-info-circle' data-tip data-for='removedInfo'></i>
                        <ReactTooltip id='removedInfo' effect='solid'>
                          <span>
                            Liczba osób skreślonych w ciągu miesiąca z listy oczekujących z powodu udzielenia świadczenia.
                          </span>
                        </ReactTooltip>
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Czas oczekiwania <i className='bx bx-info-circle' data-tip data-for='waitingTimeInfo'></i>
                        <ReactTooltip id='waitingTimeInfo' effect='solid'>
                          <span>
                            Średnia liczba dni oczekiwania na świadczenie zdrowotne.
                          </span>
                        </ReactTooltip>
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Ostatnia aktualizacja <i className='bx bx-info-circle' data-tip data-for='updateInfo'></i>
                        <ReactTooltip id='updateInfo' effect='solid'>
                          <span>
                            Miesiąc aktualizacji danych dotyczących liczby osób wpisanych na listę oczekujących na świadczenie zdrowotne, liczby osób skreślonych w ciągu miesiąca
                            z listy oczekujących z powodu udzielenia świadczenia oraz średniej liczby dni oczekiwania na świadczenie zdrowotne.
                          </span>
                        </ReactTooltip>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {printTableRows()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RouterAnimation>
  )
}

Statistics.propTypes = {
  clinics: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Statistics