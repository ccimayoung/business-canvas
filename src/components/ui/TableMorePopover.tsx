import { MoreOutlined } from '@ant-design/icons';
import { Popover, Button } from 'antd';

import { MoreDropDown } from './MoreDropDown';

interface TableMorePopoverProps {
    onEdit?: () => void;
    onDelete?: () => void;
}

export const TableMorePopover = ({
    onEdit,
    onDelete,
}: TableMorePopoverProps) => {
    return (
        <Popover
            content={<MoreDropDown onEdit={onEdit} onDelete={onDelete} />}
            trigger="click"
            placement="bottomRight"
            arrow={false}
            styles={{ container: { padding: 0 } }}
        >
            <Button type="text" icon={<MoreOutlined />} />
        </Popover>
    );
};
