/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: scy😊
 * @LastEditTime: 2021-02-05 10:05:55
 */
import https from '@/utils/https'
import { RootObject } from '@/model/rootObject'
import { ContentType, Method } from 'axios-mapper'
import { ListTypeFace, ConfigModel } from '../model/imgModel'
//= ===========================字典管理==============================
export const listData = (params: any) => {
  return https().request<RootObject<any>>('system/dict/data/list', Method.GET, params, ContentType.json)
}

export const getData = (dictCode: any) => {
  return https().request<RootObject<any>>('system/dict/data/', Method.GET, dictCode, ContentType.json)
}

export const addData = (data: any) => {
  return https().request<RootObject<any>>('system/dict/data', Method.POST, data, ContentType.json)
}

export const updateData = (data: any) => {
  return https().request<RootObject<any>>('system/dict/data', Method.PUT, data, ContentType.json)
}

export const delData = (dictCode: any) => {
  return https().request<RootObject<any>>(`system/dict/data/${dictCode}`, Method.DELETE, undefined, ContentType.json)
}
export const exportData = (params: any) => {
  return https().request<RootObject<any>>('system/dict/data/export', Method.GET, params, ContentType.json)
}

export const listType = (params: any) => {
  return https().request<ListTypeFace<any>>('system/dict/type/list', Method.GET, params, ContentType.form)
}

export const getTypeApi = (dictId: any) => {
  return https().request<RootObject<any>>(`system/dict/type/${dictId}`, Method.GET, undefined, ContentType.json)
}

export const getDicts = (dictType: any) => {
  return https().request<RootObject<any>>(`system/dict/data/type/${dictType}`, Method.GET, undefined, ContentType.json)
}

export const getType = (dictId: any) => {
  return https().request<RootObject<any>>(`system/dict/type/${dictId}`, Method.GET, undefined, ContentType.json)
}

// 删除字典类型
export const delType = (dictId: any) => {
  return https().request<RootObject<any>>(`system/dict/type/${dictId}`, Method.DELETE, undefined, ContentType.json)
}

// 新增字典类型
export const addType = (data: any) => {
  return https().request<RootObject<any>>('system/dict/type/', Method.POST, data, ContentType.json)
}

// 修改字典类型
export const updateType = (data: any) => {
  return https().request<RootObject<any>>('system/dict/type/', Method.PUT, data, ContentType.json)
}

// 导出字典类型
export const exportType = (data: any) => {
  return https().request<RootObject<any>>('system/dict/type/export', Method.GET, data, ContentType.form)
}

export const listDept = (data?: any) => {
  return https().request<RootObject<any>>('system/dept/list', Method.GET, data, ContentType.form)
}

export const getDept = (deptId: any) => {
  return https().request<RootObject<any>>(`system/dept/${deptId}`, Method.GET, undefined, ContentType.form)
}

export const listDeptExcludeChild = (deptId: any) => {
  return https().request<RootObject<any>>(`system/dept/list/exclude/${deptId}`, Method.GET, undefined, ContentType.form)
}

export const delDept = (deptId: any) => {
  return https().request<RootObject<any>>(`system/dept/${deptId}`, Method.DELETE, undefined, ContentType.form)
}

// 修改部门

export const updateDept = (data: any) => {
  return https().request<RootObject<any>>('system/dept/', Method.PUT, data, ContentType.form)
}

// 新增部门

export const addDept = (data: any) => {
  return https().request<RootObject<any>>('system/dept/', Method.POST, data, ContentType.form)
}

//= ==============参数管理==================//
// 查询参数列表

export const listConfig = (params: any) => {
  console.log(params)
  return https().request<ConfigModel>('system/config/list/', Method.GET, params, ContentType.form)
}

// 查询参数详细

export const getConfig = (params: any) => {
  return https().request<RootObject<any>>(`system/config/${params}`, Method.GET, params, ContentType.form)
}

// 根据参数键名查询参数值

export const getConfigKey = (params: any) => {
  return https().request<RootObject<any>>(`system/config/configKey/${params}`, Method.GET, params, ContentType.form)
}

// 新增参数配置
export const addConfig = (data: any) => {
  return https().request<RootObject<any>>('system/config/', Method.POST, data, ContentType.form)
}

// 修改参数配置

export const updateConfig = (data: any) => {
  return https().request<RootObject<any>>('system/config/', Method.PUT, data, ContentType.form)
}

// 删除参数配置
export const delConfig = (configId: any) => {
  return https().request<RootObject<any>>(`system/config/${configId}/`, Method.DELETE, undefined, ContentType.form)
}

// 清理参数缓存

export const clearCache = () => {
  return https().request<RootObject<any>>('system/config/clearCache/', Method.DELETE, undefined, ContentType.form)
}

// 导出参数

export const exportConfig = (data: any) => {
  return https().request<RootObject<any>>('system/config/export/', Method.GET, data, ContentType.form)
}

//= =============岗位管理============//

// 查询岗位列表

export const listPost = (params: any) => {
  return https().request<RootObject<any>>('system/post/list/', Method.GET, params, ContentType.form)
}

// 查询岗位详细
export const getPost = (postId: any) => {
  return https().request<RootObject<any>>(`system/post/${postId}`, Method.GET, undefined, ContentType.form)
}

// 新增岗位

export const addPost = (data: any) => {
  return https().request<RootObject<any>>('system/post/', Method.POST, data, ContentType.form)
}

// 修改岗位

export const updatePost = (data: any) => {
  return https().request<RootObject<any>>('system/post/', Method.PUT, data, ContentType.form)
}

// 删除岗位
export const delPost = (postId: any) => {
  return https().request<RootObject<any>>(`system/post/${postId}`, Method.DELETE, undefined, ContentType.form)
}

// 导出岗位

export const exportPost = (params: any) => {
  return https().request<RootObject<any>>('system/post/export', Method.GET, params, ContentType.form)
}
