import uniqueId from '@form-create/utils/lib/unique';

const label = '表格';
const name = 'fc-table'; //必须与全局注册的组件fc-table组件一致

export const fcTable = {
    //拖拽组件的图标
    icon: 'icon-date',
    //拖拽组件的名称
    label,
    //拖拽组件的 key
    name,
    //拖拽组件的生成规则
    rule() {
        //如果在 props 方法中需要修改 rule 的属性,需要提前在 rule 上定义对应的属性
        return {
          type: name,
          field: uniqueId(),
          title: '表格',
          $required: false,
          props: {}
      };
    },
    //拖拽组件配置项(props)的生成规则
    props(_, {t}) {
        return [
            {
                type: 'radio',
                title: '数据源',
                field: '_dataType',
                value: 0,
                options: [
                    {'label': t('props.optionsType.json'), 'value': 0},
                    {'label': t('props.optionsType.fetch'), 'value': 1},
                ],
                props: {
                    type: 'button'
                },
                control: [
                    {
                        value: 0,
                        rule: [
                            {
                                type: 'Struct',
                                field: 'formCreateProps>data',
                                props: {defaultValue: []}
                            },
                        ],
                    },
                    {
                        value: 1,
                        rule: [
                            {
                                type: 'Fetch',
                                field: 'formCreateEffect>fetch',
                                props: {
                                    to: 'options'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                type: 'Struct',
                field: 'config',
                title: '表格参数',
                props: {
                    defaultValue: {}
                }
            },
            {
                type: 'Struct',
                field: 'columns',
                title: '数据列',
                props: {
                    defaultValue: []
                }
            }
        ];
    }
};
