import { useMemo } from 'react';
import {
  Form,
  useLoaderData,
  useSubmit,
  useTransition,
  useSearchParams
} from '@remix-run/react';
import type { LoaderData } from '~/routes';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isActive, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'px-6 transition-all hover:opacity-80 ease-in rounded-xl 2xl:mr-0 mr-2 py-2',
        isActive
          ? 'bg-gradient-to-r from-brand-primary to-brand-secondary'
          : 'bg-neutral-200'
      )}
    >
      <span
        className={clsx('font-semibold', {
          'text-white': isActive,
          'bg-gradient-to-r font-semibold bg-clip-text from-brand-primary text-transparent to-brand-secondary':
            !isActive
        })}
      >
        {props.children}
      </span>
    </button>
  );
};

const Filters: React.FC = () => {
  const data = useLoaderData<LoaderData>();
  const transition = useTransition();
  const [params] = useSearchParams();
  const submit = useSubmit();

  const sortBy = useMemo(() => {
    const transitionSortBy = transition.submission?.formData.get('sortBy');

    if (transition.state === 'submitting' && transitionSortBy)
      return transitionSortBy;

    if (transition.state === 'submitting' && !transitionSortBy) return 'recent';

    return params.get('sortBy') || 'recent';
  }, [params, transition]);

  const page = +(params.get('page') || '1') || 1;

  const sort = (sortBy: string) => {
    submit(
      {
        category: params.get('category') || '',
        sortBy,
        page: page.toString()
      },
      {
        replace: true,
        action: '/'
      }
    );
  };

  const goToPage = (page: number) => {
    submit(
      {
        category: params.get('category') || '',
        sortBy: sortBy.toString(),
        page: page.toString()
      },
      {
        replace: true,
        action: '/'
      }
    );
  };

  return (
    <div className="w-full mb-6">
      <Form
        action="/"
        onChange={event => {
          const category = (event.currentTarget[0] as any).value ?? '';
          submit(
            {
              category,
              sortBy: sortBy.toString(),
              page: '1'
            },
            { replace: true, action: '/' }
          );
        }}
        className="flex items-start justify-between text-lg 2xl:items-center text-neutral-600"
      >
        <div className="flex flex-col space-y-4 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
          <div className="2xl:pr-6 2xl:border-r border-neutral-300">
            <label className="flex items-center 2xl:space-x-2">
              <span className="hidden font-semibold 2xl:inline">
                Filter by:
              </span>
              <select
                className="p-3 bg-white border rounded-2xl border-neutral-300"
                defaultValue={params.get('category') || ''}
                name="category"
              >
                <option value="">All Products</option>

                {data.categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="flex flex-wrap items-center gap-2 lg:gap-0 lg:flex-nowrap 2xl:space-x-4">
            <p className="hidden font-semibold 2xl:inline">Sort by:</p>

            <Button
              onClick={() => sort('recent')}
              type="button"
              name="sortBy"
              value="recent"
              isActive={sortBy === 'recent'}
            >
              Most Recent
            </Button>

            <Button
              name="sortBy"
              value="lowestCost"
              type="button"
              onClick={() => sort('lowestCost')}
              isActive={sortBy === 'lowestCost'}
            >
              Lowest Price
            </Button>

            <Button
              name="sortBy"
              value="highestCost"
              type="button"
              onClick={() => sort('highestCost')}
              isActive={sortBy === 'highestCost'}
            >
              Highest Price
            </Button>
          </fieldset>
        </div>

        <fieldset className="flex items-center justify-between px-4 py-3 space-x-4 border border-neutral-300 rounded-2xl">
          <button
            name="page"
            value={page - 1}
            disabled={page === 1}
            type="button"
            onClick={() => goToPage(page - 1)}
            className="p-2 rotate-180 rounded-lg disabled:cursor-not-allowed disabled:bg-neutral-200 bg-brand-light"
          >
            <img src="/icons/ios-arrow.svg" alt="Go Back Page" />
          </button>

          <p className="text-lg font-semibold">
            Page{' '}
            <span className="text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text">
              {page} of {data.pages}
            </span>
          </p>

          <button
            name="page"
            value={page + 1}
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === data.pages}
            className="p-2 rounded-lg disabled:bg-neutral-200 disabled:cursor-not-allowed bg-brand-light"
          >
            <img src="/icons/ios-arrow.svg" alt="Go Next Page" />
          </button>
        </fieldset>
      </Form>
    </div>
  );
};

export default Filters;
