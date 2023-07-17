"use strict";
(self["webpackChunksmmart_cms"] = self["webpackChunksmmart_cms"] || []).push([[8267],{

/***/ 68440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_PluginRoute)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 17 modules
var helper_plugin_esm = __webpack_require__(5848);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/permissions.js
var permissions = __webpack_require__(77063);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.js
var Refresh = __webpack_require__(30815);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-update-static-content/utils/pluginId.js
var pluginId = __webpack_require__(99854);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/utils/getTrad.js

const getTrad = (id) => `${(pluginId_default())}.${id}`;
/* harmony default export */ const utils_getTrad = (getTrad);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/hooks/useFormattedLabel.js


function useFormattedLabel(labelId) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const label = formatMessage({ id: utils_getTrad(labelId) });
  return label;
}

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.js
var EmptyPermissions = __webpack_require__(65169);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.js
var ArrowRight = __webpack_require__(37323);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(89722);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(32064);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/Guard/index.js






const ICON_SIZE = 100;
function Guard({ errors, children }) {
  if (errors?.message === "ACCESS_DENIED" && errors?.type === "ROLES_AND_PERMISSIONS") {
    const PERMISSION_DENIED_MESSAGE = useFormattedLabel("permission.guard");
    return /* @__PURE__ */ react.createElement(
      EmptyStateLayout/* EmptyStateLayout */.x,
      {
        content: PERMISSION_DENIED_MESSAGE,
        icon: /* @__PURE__ */ react.createElement(EmptyPermissions/* default */.Z, { width: ICON_SIZE, height: ICON_SIZE })
      }
    );
  }
  if (errors.message === "MISSING_CONFIG") {
    const MISSING_CONFIG = useFormattedLabel("plugin.missingConfig.message");
    const MISSING_CONFIG_BTN = useFormattedLabel("plugin.missingConfig.button");
    return /* @__PURE__ */ react.createElement(
      EmptyStateLayout/* EmptyStateLayout */.x,
      {
        content: `${MISSING_CONFIG}${errors.type}`,
        icon: /* @__PURE__ */ react.createElement(EmptyPermissions/* default */.Z, { width: ICON_SIZE, height: ICON_SIZE }),
        action: /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.Q, { to: `/settings/${(pluginId_default())}`, variant: "default", endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.Z, null) }, MISSING_CONFIG_BTN)
      }
    );
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
}
Guard.propTypes = {
  errors: prop_types_default().shape({
    message: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  children: (prop_types_default()).node
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(77197);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/PageWrapper/index.js





const PADDING_X = 10;
const PADDING_Y = 2;
function PageLoading() {
  const LOADING_MESSAGE = useFormattedLabel("loadingMsg");
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, LOADING_MESSAGE));
}
function PageWrapper({ children, baseHeaderLayout, pageTitle, isLoading }) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: pageTitle }), baseHeaderLayout, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      paddingRight: PADDING_X,
      paddingLeft: PADDING_X,
      paddingTop: PADDING_Y,
      paddingBottom: PADDING_Y
    },
    isLoading ? /* @__PURE__ */ react.createElement(PageLoading, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, children)
  ));
}
PageWrapper.propTypes = {
  children: (prop_types_default()).node.isRequired,
  baseHeaderLayout: (prop_types_default()).node.isRequired,
  pageTitle: (prop_types_default()).string.isRequired,
  isLoading: (prop_types_default()).bool.isRequired
};

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(52861);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/utils/axiosInstance.js


const instance = axios["default"].create({
  baseURL: ""
});
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${helper_plugin_esm/* auth */.I8.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      helper_plugin_esm/* auth */.I8.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
/* harmony default export */ const axiosInstance = (instance);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/hooks/useFetchData.js


function useFetchData({ url, method }) {
  const [fetchedData, setFetchedData] = (0,react.useState)({});
  const [errors, setErrors] = (0,react.useState)({});
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [refetch, setRefetch] = (0,react.useState)({});
  (0,react.useEffect)(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance(url, { method });
      setFetchedData(response.data);
    } catch (err) {
      console.log(err);
      setErrors({
        message: err.response.data.error.message,
        type: err.response.data.error.details.type
      });
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setFetchedData, setErrors, refetch]);
  return { fetchedData, isLoading, errors, setRefetch };
}

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(84495);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/differenceInMilliseconds/index.js
var differenceInMilliseconds = __webpack_require__(59910);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/defaultOptions/index.js
var _lib_defaultOptions = __webpack_require__(84314);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/differenceInCalendarDays/index.js + 1 modules
var differenceInCalendarDays = __webpack_require__(36094);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(11221);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale = __webpack_require__(44941);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/subMilliseconds/index.js + 1 modules
var subMilliseconds = __webpack_require__(29558);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(19013);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
var getTimezoneOffsetInMilliseconds = __webpack_require__(24262);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(13882);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(83946);
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/formatRelative/index.js









/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$weekStartsOn, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2;
  (0,requiredArgs/* default */.Z)(2, arguments);
  var date = (0,toDate/* default */.Z)(dirtyDate);
  var baseDate = (0,toDate/* default */.Z)(dirtyBaseDate);
  var defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.j)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale/* default */.Z;
  var weekStartsOn = (0,toInteger/* default */.Z)((_ref2 = (_ref3 = (_ref4 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0);
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }
  var diff = (0,differenceInCalendarDays/* default */.Z)(date, baseDate);
  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }
  var token;
  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }
  var utcDate = (0,subMilliseconds/* default */.Z)(date, (0,getTimezoneOffsetInMilliseconds/* default */.Z)(date));
  var utcBaseDate = (0,subMilliseconds/* default */.Z)(baseDate, (0,getTimezoneOffsetInMilliseconds/* default */.Z)(baseDate));
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
  return (0,format/* default */.Z)(date, formatStr, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
}
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/Label/index.js


function Label(status) {
  const isSuccess = status === "success";
  const isFailure = status === "failure";
  const BadgeStyles = {
    textColor: "neutral100",
    backgroundColor: isSuccess ? "success500" : isFailure ? "danger500" : "neutral800"
  };
  return /* @__PURE__ */ react.createElement(Badge/* Badge */.C, { ...BadgeStyles }, status);
}

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/CustomRow/index.js








function CustomRow({
  id,
  conclusion,
  name,
  run_number,
  run_started_at,
  html_url,
  updated_at,
  created_at
}) {
  const isThereAConclusion = Boolean(conclusion);
  const [disabledLogsButton, setDisabledLogsButton] = (0,react.useState)(isThereAConclusion ? false : true);
  const msDiffResult = (0,differenceInMilliseconds/* default */.Z)(new Date(updated_at), new Date(run_started_at));
  const mins = Math.floor(msDiffResult / 1e3 / 60);
  const secs = msDiffResult / 1e3 % 60;
  const creationDate = formatRelative(new Date(created_at), new Date());
  async function logsHandler(id2) {
    setDisabledLogsButton(true);
    try {
      let logsUrl = await axiosInstance({
        method: "get",
        url: `/${(pluginId_default())}/github-actions-jobs-log`,
        params: {
          jobId: id2
        }
      });
      window.open(`${logsUrl.data}`, "_blank");
    } catch (err) {
      console.error(err);
    } finally {
      setDisabledLogsButton(false);
    }
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Tr.Tr, { "aria-rowindex": id }, /* @__PURE__ */ react.createElement(Cell.Td, null, run_number), /* @__PURE__ */ react.createElement(Cell.Td, null, name), /* @__PURE__ */ react.createElement(Cell.Td, null, conclusion ? Label(conclusion) : "-"), /* @__PURE__ */ react.createElement(Cell.Td, null, creationDate), !isThereAConclusion ? /* @__PURE__ */ react.createElement(Cell.Td, null, "in progress") : /* @__PURE__ */ react.createElement(Cell.Td, null, `${mins ? mins + "m" : ""} ${secs}s`), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(IconButton/* IconButtonGroup */.o, null, /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: "logs" }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      disabled: disabledLogsButton,
      "aria-label": "logs",
      onClick: () => logsHandler(id),
      icon: /* @__PURE__ */ react.createElement(Eye/* default */.Z, null)
    }
  )), /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.u, { description: "view more" }, /* @__PURE__ */ react.createElement("a", { href: html_url, target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, { "aria-label": "view more", icon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null) })))))));
}
CustomRow.propTypes = {
  id: (prop_types_default()).number,
  conclusion: (prop_types_default()).string,
  name: (prop_types_default()).string,
  run_number: (prop_types_default()).number,
  run_started_at: (prop_types_default()).string,
  html_url: (prop_types_default()).string,
  updated_at: (prop_types_default()).string,
  created_at: (prop_types_default()).string
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Alert/Alert.js + 1 modules
var Alert = __webpack_require__(18986);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/ToastMsg/index.js



const stickyStyle = {
  position: "fixed",
  top: 24,
  left: "calc(50%)",
  transform: "translateX(-50%)",
  zIndex: 10
};
function ToastMessage({ variant, title, message, action, closeToastHandler }) {
  return /* @__PURE__ */ react.createElement(
    Alert/* Alert */.b,
    {
      variant,
      title,
      action,
      style: stickyStyle,
      onClose: closeToastHandler,
      closeLabel: "close alert"
    },
    message
  );
}
ToastMessage.propTypes = {
  variant: (prop_types_default()).string.isRequired,
  title: (prop_types_default()).string.isRequired,
  message: (prop_types_default()).string.isRequired,
  action: (prop_types_default()).node,
  closeToastHandler: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/pages/PluginPage/index.js













const THEAD_ITEMS = [
  "Run Number",
  "Workflow Name",
  "Status",
  "Creation Date",
  "Duration",
  /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, { key: "actions" })
];
const ProtectedPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions/* default */.Z.trigger }, /* @__PURE__ */ react.createElement(PluginPage, null));
const PluginPage = () => {
  const [loadingTriggerButton, setLoadingTriggerButton] = (0,react.useState)(false);
  const [toastMsg, setToastMsg] = (0,react.useState)({});
  const [toastToggle, setToastToggle] = (0,react.useState)(false);
  const { errors, fetchedData, isLoading, setRefetch } = useFetchData({
    url: `/${(pluginId_default())}/github-actions-history`,
    method: "GET"
  });
  const TITLE = useFormattedLabel("plugin.title");
  const HEADER_TITLE = useFormattedLabel("plugin.headers.title");
  const HEADER_SUBTITLE = useFormattedLabel("plugin.headers.subtitle");
  const PRIMARY_ACTION_BUTTON = useFormattedLabel("plugin.buttons.primary");
  const TOAST_SUCCESS_TITLE = useFormattedLabel("plugin.toast.success.title");
  const TOAST_SUCCESS_DESCRIPTION = useFormattedLabel("plugin.toast.success.description");
  const TOAST_FAILURE_UNKNOWN_TITLE = useFormattedLabel("plugin.toast.failure.unknown.title");
  const TOAST_FAILURE_UNKNOWN_DESCRIPTION = useFormattedLabel(
    "plugin.toast.failure.unknown.description"
  );
  const TOAST_FAILURE_UNPROCESSABLE_TITLE = useFormattedLabel(
    "plugin.toast.failure.unprocessableEntity.title"
  );
  const TOAST_FAILURE_UNPROCESSABLE_DESCRIPTION = useFormattedLabel(
    "plugin.toast.failure.unprocessableEntity.description"
  );
  const TOAST_PERMISSION_DENIED_MSG = useFormattedLabel("permission.toast.message");
  const TOAST_PERMISSION_DENIED_TITLE = useFormattedLabel("permission.toast.title");
  const SEE_MORE_BUTTON = useFormattedLabel("button.seeMore");
  const REFRESH_BUTTON = useFormattedLabel("button.refresh");
  const BACK_BUTTON = useFormattedLabel("button.back");
  async function triggerGithubActions() {
    try {
      setLoadingTriggerButton(true);
      await axiosInstance(`/${(pluginId_default())}/github-actions-trigger`, {
        method: "POST"
      });
      setToastMsg({
        variant: "success",
        title: TOAST_SUCCESS_TITLE,
        message: TOAST_SUCCESS_DESCRIPTION,
        action: /* @__PURE__ */ react.createElement(
          TextButton/* TextButton */.A,
          {
            endIcon: /* @__PURE__ */ react.createElement(Refresh/* default */.Z, null),
            onClick: () => {
              setRefetch({});
              setToastToggle(false);
            }
          },
          REFRESH_BUTTON
        )
      });
      setToastToggle(true);
    } catch (error) {
      console.error(error);
      if (error.response.data.error?.status === 422 && error.response.data.error?.name === "UnprocessableEntityError") {
        setToastMsg({
          variant: "danger",
          title: TOAST_FAILURE_UNPROCESSABLE_TITLE,
          message: TOAST_FAILURE_UNPROCESSABLE_DESCRIPTION,
          action: /* @__PURE__ */ react.createElement(
            Link/* Link */.r,
            {
              isExternal: true,
              href: "https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow"
            },
            SEE_MORE_BUTTON
          )
        });
      } else if (error.response.data.error?.status === 403 && error.response.data.error?.name === "PolicyError") {
        setToastMsg({
          variant: "danger",
          title: TOAST_PERMISSION_DENIED_TITLE,
          message: TOAST_PERMISSION_DENIED_MSG
        });
      } else {
        setToastMsg({
          variant: "danger",
          title: TOAST_FAILURE_UNKNOWN_TITLE,
          message: TOAST_FAILURE_UNKNOWN_DESCRIPTION
        });
      }
      setToastToggle(true);
    } finally {
      setLoadingTriggerButton(false);
    }
  }
  const isAccessDenied = errors.message === "ACCESS_DENIED" && errors.type === "ROLES_AND_PERMISSIONS";
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    PageWrapper,
    {
      isLoading,
      baseHeaderLayout: /* @__PURE__ */ react.createElement(
        HeaderLayout/* BaseHeaderLayout */.A,
        {
          title: HEADER_TITLE,
          subtitle: HEADER_SUBTITLE,
          navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { to: "/", startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null) }, BACK_BUTTON),
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.z,
            {
              onClick: triggerGithubActions,
              variant: "default",
              size: "L",
              disabled: isAccessDenied ? true : false,
              loading: loadingTriggerButton,
              startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
            },
            PRIMARY_ACTION_BUTTON
          )
        }
      ),
      pageTitle: TITLE
    },
    toastToggle && /* @__PURE__ */ react.createElement(ToastMessage, { ...toastMsg, closeToastHandler: () => setToastToggle(false) }),
    /* @__PURE__ */ react.createElement(Guard, { errors }, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: 6, rowCount: 21 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, THEAD_ITEMS.map((title, i) => /* @__PURE__ */ react.createElement(Cell.Th, { key: i }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, title))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, fetchedData?.workflow_runs?.map(
      ({
        id,
        conclusion,
        name,
        run_number,
        run_started_at,
        html_url,
        updated_at,
        disabled,
        created_at
      }) => {
        return /* @__PURE__ */ react.createElement(
          CustomRow,
          {
            toastMsg,
            setToastMsg,
            toastToggle,
            setToastToggle,
            key: id,
            id,
            conclusion,
            name,
            run_number,
            run_started_at,
            html_url,
            updated_at,
            disabled,
            created_at
          }
        );
      }
    ))))
  ));
};
/* harmony default export */ const pages_PluginPage = (ProtectedPage);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/components/TextField/index.js



function TextField({ HintMessage, ...other }) {
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1.5 }, /* @__PURE__ */ react.createElement(TextInput/* TextInput */.o, { ...other }), HintMessage);
}
TextField.propTypes = {
  HintMessage: (prop_types_default()).node
};

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/pages/SettingPage/index.js










const SettingPage_ProtectedPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions/* default */.Z.settings }, /* @__PURE__ */ react.createElement(SettingPage, null));
const SettingPage = () => {
  const { errors, isLoading, fetchedData } = useFetchData({
    url: `/${(pluginId_default())}/config`,
    method: "GET"
  });
  const { branch, githubToken, owner, repo, workflowId } = fetchedData;
  const PAGE_TITLE = useFormattedLabel("settings.pagetitle");
  const HEADER_TITLE = useFormattedLabel("settings.headers.title");
  const HEADER_SUBTITLE = useFormattedLabel("settings.headers.subtitle");
  const GITHUB_TOKEN = useFormattedLabel("settings.fields.githubtoken");
  const REPO = useFormattedLabel("settings.fields.repo");
  const WORKFLOWID = useFormattedLabel("settings.fields.workflowid");
  const OWNER = useFormattedLabel("settings.fields.owner");
  const BRANCH = useFormattedLabel("settings.fields.branch");
  const HINT_GITHUB_TOKEN = useFormattedLabel("settings.fields.hint.githubtoken");
  const HINT_OWNER = useFormattedLabel("settings.fields.hint.owner");
  const HINT_REPO = useFormattedLabel("settings.fields.hint.repo");
  const HINT_WORKFLOWID = useFormattedLabel("settings.fields.hint.workflowid");
  const HINT_BRANCH = useFormattedLabel("settings.fields.hint.branch");
  const PLACEHOLDER_GITHUB_TOKEN = useFormattedLabel("settings.fields.placeholder.githubtoken");
  const PLACEHOLDER_OWNER = useFormattedLabel("settings.fields.placeholder.owner");
  const PLACEHOLDER_REPO = useFormattedLabel("settings.fields.placeholder.repo");
  const PLACEHOLDER_WORKFLOWID = useFormattedLabel("settings.fields.placeholder.workflowid");
  const PLACEHOLDER_BRANCH = useFormattedLabel("settings.fields.placeholder.branch");
  const BUTTON_DETAILS = useFormattedLabel("button.details");
  return /* @__PURE__ */ react.createElement(
    PageWrapper,
    {
      isLoading,
      baseHeaderLayout: /* @__PURE__ */ react.createElement(HeaderLayout/* BaseHeaderLayout */.A, { title: HEADER_TITLE, subtitle: HEADER_SUBTITLE }),
      pageTitle: PAGE_TITLE
    },
    /* @__PURE__ */ react.createElement(Guard, { errors }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      TextField,
      {
        label: GITHUB_TOKEN,
        "aria-label": GITHUB_TOKEN,
        name: "githubToken",
        value: githubToken || PLACEHOLDER_GITHUB_TOKEN,
        disabled: true,
        required: true,
        HintMessage: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, HINT_GITHUB_TOKEN, " ", /* @__PURE__ */ react.createElement(
          Link/* Link */.r,
          {
            href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
            isExternal: true
          },
          BUTTON_DETAILS
        ))
      }
    ), /* @__PURE__ */ react.createElement(
      TextField,
      {
        label: OWNER,
        "aria-label": OWNER,
        name: "owner",
        value: owner || PLACEHOLDER_OWNER,
        disabled: true,
        required: true,
        HintMessage: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, HINT_OWNER)
      }
    ), /* @__PURE__ */ react.createElement(
      TextField,
      {
        label: REPO,
        "aria-label": REPO,
        name: "repo",
        value: repo || PLACEHOLDER_REPO,
        disabled: true,
        required: true,
        HintMessage: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, HINT_REPO)
      }
    ), /* @__PURE__ */ react.createElement(
      TextField,
      {
        label: WORKFLOWID,
        "aria-label": WORKFLOWID,
        name: "workflow_id",
        value: workflowId || PLACEHOLDER_WORKFLOWID,
        disabled: true,
        required: true,
        HintMessage: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, HINT_WORKFLOWID)
      }
    ), /* @__PURE__ */ react.createElement(
      TextField,
      {
        label: BRANCH,
        "aria-label": BRANCH,
        name: "branch",
        value: branch || PLACEHOLDER_BRANCH,
        disabled: true,
        required: true,
        HintMessage: /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "omega" }, HINT_BRANCH)
      }
    )))
  );
};
/* harmony default export */ const pages_SettingPage = (SettingPage_ProtectedPage);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-update-static-content/admin/src/pages/PluginRoute/index.js






const PluginRoute = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/settings/${(pluginId_default())}`, component: pages_SettingPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${(pluginId_default())}`, component: pages_PluginPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { component: helper_plugin_esm.NotFound })));
};
/* harmony default export */ const pages_PluginRoute = (PluginRoute);


/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ p),
  T: () => (/* binding */ HeaderLayout_b)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 32064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71997);
/* harmony import */ var _Button_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92577);
/* harmony import */ var _BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21817);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75515);








const R = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseButtonWrapper */ .G))`
  &[aria-disabled='true'] {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    &:active {
      ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    }
  }
  &:hover {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getHoverStyle */ .yP}
  }
  &:active {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getActiveStyle */ .tB}
  }
  ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVariantStyle */ .PD}
`, A = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ variant: l = "default", startIcon: o, endIcon: i, disabled: r = !1, children: m, size: t = "S", href: e, to: a, ...g }, s) => {
  const c = e ? "_blank" : void 0, h = e ? "noreferrer noopener" : void 0, d = t === "S" ? 2 : "10px", p = 4;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(R, { ref: s, "aria-disabled": r, size: t, variant: l, target: c, rel: h, to: r ? void 0 : a, href: r ? "#" : e, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: !0, gap: 2, inline: !0, paddingBottom: d, paddingLeft: p, paddingRight: p, paddingTop: d, pointerEvents: r ? "none" : void 0, ...g, as: a && !r ? react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .NavLink */ .OL : "a", children: [o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: o }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: t === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children: m }), i && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: i })] });
});



/***/ }),

/***/ 37323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const o = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"
  }
) }), h = o;



/***/ })

}]);