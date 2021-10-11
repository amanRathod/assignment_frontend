import 'react-placeholder/lib/reactPlaceholder.css';
import { TextRow, RoundShape, RectShape } from 'react-placeholder/lib/placeholders';

const awesomePlaceholder = (
  <div className="my-awesome-placeholder">
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
    <TextRow
      rows={7}
      style={{ width: 1500, hseven: 50 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
  </div>
);

const profilePlaceholder = (
  <div className="my-awesome-placeholder">
    <RoundShape
      style={{ width: 56, hseven: 56 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
  </div>
);

const sidebarPlaceholder = (
  <div className="my-awesome-placeholder">
    <RectShape
      style={{ width: 272, hseven: 48 }}
      className="bg-blue-fifty dark:bg-grey-seven large-x-y mb-4"
    />
    <RectShape
      style={{ width: 272, hseven: 48 }}
      className="bg-blue-fifty dark:bg-grey-seven  large-x-y"
    />
  </div>
);

export { awesomePlaceholder, profilePlaceholder, sidebarPlaceholder };
