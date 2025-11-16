import { CircleLineDownIcon } from '@/shared/ui/icons/circle-line-down';
import { Button } from '@/shared/ui/kit/button';

import { Text } from '../kit/text';

export const Header = () => {
  return (
    <header className="container max-md:px-10!">
      <div className="flex items-center justify-between py-4">
        <Text size="lg">Logo</Text>
        <section className="flex items-center gap-5">
          <div className="flex items-center gap-5 max-md:hidden">
            <Text size="lg">sign up</Text>
            <Text size="lg">log In</Text>
          </div>
          <Button size="sm" variant="solid">
            menu
            <CircleLineDownIcon />
          </Button>
        </section>
      </div>
    </header>
  );
};
